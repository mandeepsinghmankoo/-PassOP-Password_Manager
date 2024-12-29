import React from 'react'

export const Fotter = () => {
  return (
    <div>
      <footer className="text-center mt-10 p-4 bg-gray-950  shadow ">
        <div className="text-sm text-white flex justify-center items-center gap-1">
          Securely manage your passwords with
          <div className="logo font-bold text-lg text-center mb-1 ">
            <span className="text-purple-900">&lt; </span>
            Pass
            <span className="text-purple-900">OP/ &gt; </span>
          </div>
          Privacy is our priority.
        </div>
        <p className="text-xs text-gray-500 mt-2">
          &copy; {new Date().getFullYear()} PassOP. Designed by passionate developer.
        </p>
      </footer>

    </div>
  )
}
