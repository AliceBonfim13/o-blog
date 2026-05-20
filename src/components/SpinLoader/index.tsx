import clsx from "clsx"

type SpinLoaderProps = {
  className?: string
}


export function SpinLoader({ className }: SpinLoaderProps) {
  const classes = clsx("flex items-center justify-center  h-40", className)
  return (
    <div className={classes}>
      <div className="w-10 h-10 border-5 border-t-transparent border-slate-300 rounded-full animate-spin">
      </div>
    </div>
  )
}
