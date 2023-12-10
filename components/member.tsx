import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: string,
  socialId: string,
  name: string,
  link: string,
}

const Member: React.FC<Props> = ({ id, socialId, name, link }) => {
  return (
    <div>
      <Image src={`/assets/team/agency_faces_${id}.svg`} alt={name} width={1366} height={1555} />
      <div className='text-2xl xl:text-3xl'>{name}</div>
      <div className='text-xl'>
        <Link href={link}>
          <a target='_blank'>{socialId}</a>
        </Link>
      </div>
    </div>
  )
}

export default Member;