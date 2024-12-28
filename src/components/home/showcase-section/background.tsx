export const Background = () => {
  return (
    <div
      className="absolute inset-0 h-full w-full"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        maskImage:
          'linear-gradient(180deg, rgba(0,212,255,1) 0%, rgba(0,241,255,0) 35%)'
      }}
    />
  )
}
