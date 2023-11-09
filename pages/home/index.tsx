import Input from "@/components/atoms/input/input"
export default function Home() {
    return (
        <>
        
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome To Kylle Gwapo</h1>
      <p className="test">Akong pagka gwapo walay kahumanan</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<Input placeholder="Enter Coin"  valid={true} invalid={false} />
      </>
    )
  }