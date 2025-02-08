import { useState, useEffect } from "react";

type BreakpointValues<T> = {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
  default?: T;
};

export function useBreakpointValue<T>(values: BreakpointValues<T>): T | undefined {
  const [value, setValue] = useState<T | undefined>(values.xs || values.default);

  useEffect(() => {
    const queries = [
      { breakpoint: "xs", query: "(max-width: 639px)" },
      { breakpoint: "sm", query: "(min-width: 640px) and (max-width: 767px)" },
      { breakpoint: "md", query: "(min-width: 768px) and (max-width: 1023px)" },
      { breakpoint: "lg", query: "(min-width: 1024px) and (max-width: 1279px)" },
      { breakpoint: "xl", query: "(min-width: 1280px) and (max-width: 1535px)" },
      { breakpoint: "2xl", query: "(min-width: 1536px)" },
    ];

    const mediaQueryLists = queries.map(({ query }) => window.matchMedia(query));

    const check = () => {
      for (let i = 0; i < queries.length; i++) {
        if (mediaQueryLists[i].matches && values[queries[i].breakpoint as keyof BreakpointValues<T>] !== undefined) {
          setValue(values[queries[i].breakpoint as keyof BreakpointValues<T>]);
          return;
        }
      }
      if (values.default !== undefined) {
        setValue(values.default);
      }
    };

    check();

    const handlers = mediaQueryLists.map((mql) => {
      const listener = () => check();
      mql.addEventListener("change", listener);
      return { mql, listener };
    });

    return () => {
      handlers.forEach(({ mql, listener }) => mql.removeEventListener("change", listener));
    };
  }, [values]);

  return value;
}
