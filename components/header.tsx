interface toggleProps {
  isWriteToggle: boolean
  setWriteToggle: (boolean) => void
}

export default function Header(props: toggleProps) {
  return (
   <div>
      {/* <input type="checkbox" name="Write" id="write" />
      <input type="checkbox" name="Read" id="read" /> */}
      <button onClick={() => props.setWriteToggle(!props.isWriteToggle)}>{props.isWriteToggle ? 'Read' : 'Write'}</button>
   </div> 
  )
}
