import React from 'react';
import Link from 'next/link'

function MusicItem({ album, service, serviceName }) {
  return(
    <>
      <Link href={album[service].url}>
        <a>{serviceName}</a>
      </Link>
    </>
  )
}

export default MusicItem;