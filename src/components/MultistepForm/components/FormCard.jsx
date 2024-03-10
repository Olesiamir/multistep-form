const FormCard = ({title, description, children}) => {
  return (
    <div className="card w-full bg-white p-6">
      <h1 className="font-bold text-lg text-marine-blue">{title}</h1>
      <p className=" text-sm text-cool-gray">{description}</p>
      {children}
    </div>
  )
}
export default FormCard
