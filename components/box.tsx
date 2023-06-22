import { ForwardedRef, forwardRef } from "react";

export const Box = forwardRef(({ children, dashed = false, highlighted = false, ...props }: { children: React.ReactElement[] | React.ReactElement | string, dashed?: boolean, highlighted?: boolean }, ref: React.Ref<any> | undefined) => {
  return (
    <div ref={ref} {...props} className={`flex flex-col overflow-hidden px-6 py-5 ${highlighted ? 'bg-highlight' : 'bg-content'} ${dashed ? '-mb-2px md:mb-0 md:-mr-2px border-b-2px border-r-0 md:border-r-2px md:border-b-0 border-dashed border-black' : ''}`}>
      {children}
    </div>
  );
})
Box.displayName = "Box";

export function Container({ children, cols = 'grid-cols-1' }: { children: React.ReactElement[] | React.ReactElement, cols?: string }): React.ReactElement {
  return (
    <div className={`grid gap-2px ${cols}`}>
      {children}
    </div>
  );
}