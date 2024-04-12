import type {} from 'astro/types'
import AstroIcon from '../components/svg/tech/AstroIcon.astro'
import ExpressjsIcon from '../components/svg/tech/ExpressjsIcon.astro'
import NextIcon from '../components/svg/tech/NextIcon.astro'
import NodeIcon from '../components/svg/tech/NodeIcon.astro'
import PostgresIcon from '../components/svg/tech/PostgresIcon.astro'
import PrismaIcon from '../components/svg/tech/PrismaIcon.astro'
import ReactIcon from '../components/svg/tech/ReactIcon.astro'
import TailwindIcon from '../components/svg/tech/TailwindIcon.astro'

interface Icon {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Icon: any
	className: string
}

export const getIcons = (selectedIcons: string[]) => {
	const iconList = [] as Icon[]
	selectedIcons.forEach((icon) => {
		if (icon === 'astro') iconList.push({ Icon: AstroIcon, className: 'mt-2.5 h-10 w-10' } as Icon)
		if (icon === 'express') iconList.push({ Icon: ExpressjsIcon, className: 'mt-2 h-11 w-11' } as Icon)
		if (icon === 'next') iconList.push({ Icon: NextIcon, className: 'h-10 w-10' } as Icon)
		if (icon === 'node') iconList.push({ Icon: NodeIcon, className: 'h-10 w-10' } as Icon)
		if (icon === 'postgres') iconList.push({ Icon: PostgresIcon, className: 'mt-1.5 h-10 w-10' } as Icon)
		if (icon === 'prisma') iconList.push({ Icon: PrismaIcon, className: 'h-9 w-9' } as Icon)
		if (icon === 'react') iconList.push({ Icon: ReactIcon, className: 'h-10 w-10' } as Icon)
		if (icon === 'tailwind') iconList.push({ Icon: TailwindIcon, className: 'h-10 w-10' } as Icon)
	})
	return iconList
}
