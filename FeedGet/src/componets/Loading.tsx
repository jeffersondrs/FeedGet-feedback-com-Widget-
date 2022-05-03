import { CircleNotch } from "phosphor-react";

export function Loading(){
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="text-white w-5 h-5 animate-spin"/>
    </div>
  )
}