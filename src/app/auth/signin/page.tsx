"use client"
import { signIn, useSession } from "next-auth/react"
// import { IconBrandGoogle } from "@tabler/icons-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/")
    }
  }, [session, router])

  if (status === "loading") {
    return (
      <div className='min-h-screen bg-gradient-to-br from-black via-black to-[#0a0012] flex items-center justify-center'>
        <div className='w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin'></div>
      </div>
    )
  }

  return (
    <div className='min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-black to-[#0a0012] flex items-center justify-center p-4'>
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      {/* Neon glow accents */}
      <div className='absolute top-10 left-10 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[150px]'></div>
      <div className='absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px]'></div>

      <div className='max-w-md w-full relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-pink-500/20 shadow-xl shadow-pink-500/5'>
        {/* Login Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className='w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-white py-4 px-6 rounded-xl transition-all duration-300 border border-pink-500/20 hover:border-pink-500/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]'
        >
          {/* <IconBrandGoogle size='1.5rem' className='text-pink-400' /> */}
          <span className='text-pink-200 font-medium tracking-wide'>Continue with Google</span>
        </button>
      </div>
    </div>
  )
}
