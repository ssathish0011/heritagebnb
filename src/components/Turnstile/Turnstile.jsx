import { useEffect, useRef, useState } from "react";
import "./Turnstile.css";

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
let turnstileScriptPromise;

function loadTurnstile() {
    if (window.turnstile) return Promise.resolve();

    if (!turnstileScriptPromise) {
        turnstileScriptPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
            script.async = true;
            script.defer = true;
            script.onload = resolve;
            script.onerror = () => {
                turnstileScriptPromise = undefined;
                script.remove();
                reject(new Error("Turnstile failed to load."));
            };
            document.head.appendChild(script);
        });
    }

    return turnstileScriptPromise;
}

export default function Turnstile({ onVerify }) {
    const containerRef = useRef(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!siteKey) {
            setError(true);
            return undefined;
        }

        let widgetId;
        let cancelled = false;

        loadTurnstile()
            .then(() => {
                if (cancelled || !containerRef.current) return;

                widgetId = window.turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    callback: onVerify,
                    "expired-callback": () => onVerify(""),
                    "error-callback": () => onVerify(""),
                });
            })
            .catch(() => {
                if (!cancelled) setError(true);
            });

        return () => {
            cancelled = true;
            if (widgetId !== undefined && window.turnstile) {
                window.turnstile.remove(widgetId);
            }
        };
    }, [onVerify]);

    return (
        <div className="turnstile-widget" aria-live="polite">
            <div ref={containerRef} />
            {error && (
                <p className="turnstile-widget-error" role="status">
                    Bot verification is unavailable. Please refresh and try again.
                </p>
            )}
        </div>
    );
}