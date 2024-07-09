import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../shadcdn/HoverCard"

export default function IconDialog({ children, content }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button>
          {children}
        </button>
      </HoverCardTrigger>
      <HoverCardContent className=" bg-white shadow-md rounded-lg ">
        <div className="flex justify-between">
          <div className="">
            <h4 className="text-sm font-semibold">{ content } </h4>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
