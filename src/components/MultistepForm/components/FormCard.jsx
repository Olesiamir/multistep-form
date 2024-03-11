const FormCard = ({title, description, children}) => {
  return (
    <div className="card bg-white p-6 w-auto mx-6 rounded-xl shadow-lg">
      <h1 className="font-bold text-2xl text-marine-blue pb-3">{title}</h1>
      <p className=" text-base tracking-wide leading-6 text-cool-gray pr-[18px] pb-4">{description}</p>
      {children}
    </div>
  )
}
export default FormCard
