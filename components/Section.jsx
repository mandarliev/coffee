const Section = ({children, id}) => {
  return (
<section id={id} className="min-h-screen w-screen overflow-x-hidden relative px-[8rem] py-[1rem]">
    {children}
</section>
  )
}

export default Section