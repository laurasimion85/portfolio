'use client';

function GlassButton({
  children,
  primary,
  icon: Icon,
  theme,
  onClick
}: {
  children: React.ReactNode;
  primary?: boolean;
  icon?: React.ElementType;
  theme: "dark" | "light";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const dark = theme === "dark";

  return (
    <button
      onClick={onClick}
      className={
        "group relative flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:scale-[1.03] " +
        (
          primary
            ? dark
              ? "bg-[#83f36e] text-black hover:shadow-[0_0_30px_rgba(131,243,110,0.4)]"
              : "bg-[#3F8A22] text-white hover:shadow-[0_0_20px_rgba(63,138,34,0.35)]"
            : dark
              ? "text-white border border-white/20 backdrop-blur-xl " +
              "bg-gradient-to-br from-white/[0.12] to-white/[0.03] " +
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_30px_rgba(0,0,0,0.3)] " +
              "hover:border-[#83f36e]/60 " +
              "hover:bg-gradient-to-br hover:from-[#83f36e]/15 hover:to-white/[0.03] " +
              "hover:shadow-[inset_0_1px_0_rgba(131,243,110,0.25),0_0_20px_rgba(131,243,110,0.25),0_0_50px_rgba(131,243,110,0.15)]"
              : "text-[#0a0a0a] border border-black/10 backdrop-blur-md bg-black/[0.03] hover:shadow-[0_0_20px_rgba(28,115,150,0.2)]"
        )
      }
    >
      {Icon && (
        <Icon
          size={18}
          className={
            primary
              ? dark
                ? "text-black"
                : "text-white"
              : dark
                ? "text-white transition-colors group-hover:text-[#83f36e]"
                : "text-[#0a0a0a] transition-colors group-hover:text-[#3F8A22]"
          }
        />
      )}

      {children}
    </button>
  );
}

export default GlassButton;