import clsx from "clsx"
import { useId } from "react"

type InputTextProps = {
  labelText?: string
} & React.ComponentProps<'input'>

export function InputText({ labelText, ...props }: InputTextProps) {
  const id = useId()
  return (
    <div className="flex flex-col gap-2">
      {labelText && <label className="text-sm" htmlFor={id}>{labelText}</label>}
      <input
        {...props}
        className={clsx(' outline-0 text-base/tight',
          'ring-2 ring-slate-500 rounded',
          'p-2 transition focus:ring-blue-600',
          'placeholder-slate-300',
          'disabled:bg-slate-500',
          'disabled:placeholder-slate-200',
          'read-only:bg-slate-00',


          props.className,
        )} id={id} />
    </div>
  )
}
