export function Button (props) {
  return (
    <>
      <div>
        <button
         type="button"
          className={`"hidden lg:block border-none text-default w-full  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block">Start The Course tracking-wide text-lg ${props.className}`}
        >
          {props.name}
        </button>
      </div>
    </>
  )
}
