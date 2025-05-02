const Header = ({ className }: { className: string }) => {
  return (
    <header className={className}>
        <div className="flex items-center justify-between w-full h-full px-[16px]">
            <div className="h-full aspect-square bg-green-600"></div>

            <div className="flex gap-[12px] text-[12px]">
                <p>🏆 1000</p>
                <p>🔥 365</p>
                <p>🎲 3</p>
                <p>🐇 3</p>
            </div>

            <div className="flex items-center gap-2 h-full py-1">
                <p className="text-[14px]">Neo</p>
                <div className="h-full aspect-square bg-green-600 rounded-full"></div>
            </div>
        </div>
    </header>
  )
}

export default Header