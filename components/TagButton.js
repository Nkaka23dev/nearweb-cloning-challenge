export function TagButton (props) {
    return (
      <>
        <div>
          <button
           type="button"
            className={`ml-12 bg-zinc-700 text-white  focus:outline-none cursor-pointer leading-4 transition-250ms w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block tracking-wide text-lg ${props.className}`}
          >
            {props.name}
          </button>
        </div>
      </>
    )
  }
  