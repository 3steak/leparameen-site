"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { ConversionEvent } from "@/lib/site-config";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: ConversionEvent;
  eventLabel: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function TrackedLink({
  children,
  eventName,
  eventLabel,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      data-conversion-event={eventName}
      data-conversion-label={eventLabel}
      onClick={(event) => {
        window.dispatchEvent(
          new CustomEvent("conversion-click", {
            detail: {
              event: eventName,
              label: eventLabel,
              href: props.href,
            },
          }),
        );

        window.dataLayer?.push({
          event: eventName,
          label: eventLabel,
          href: props.href,
        });

        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
