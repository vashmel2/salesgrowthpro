import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({ className, children, hover = true, padding = 'md' }: CardProps) {
  const paddings = {
    sm: 'p-4 md:p-5',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  }

  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-card',
        paddings[padding],
        hover && 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}

export function ServiceCard({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}) {
  return (
    <Card className={cn('group cursor-pointer border border-transparent hover:border-brand-light', className)}>
      <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-bright mb-5 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
    </Card>
  )
}
