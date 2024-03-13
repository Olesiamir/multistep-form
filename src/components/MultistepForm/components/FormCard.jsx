const FormCard = ({title, description, children}) => {
  return (
    <div className="card flex flex-col bg-white p-6 w-auto mx-6 rounded-xl shadow-lg md:p-0 md:m-0 md:shadow-none md:col-start-13 md:col-span-11
      md:row-start-3 md:row-end-18 lg:col-start-11 lg:col-span-12 lg:row-start-5 lg:row-end-17">
      <h1 className="font-bold text-2xl text-marine-blue pb-3 md:text-3xl md:pb-2">{title}</h1>
      <p className=" text-base tracking-wide leading-6 text-cool-gray pr-[18px] pb-4 md:text-sm md:pb-10">{description}</p>
      {children}
    </div>
  )
}
export default FormCard
