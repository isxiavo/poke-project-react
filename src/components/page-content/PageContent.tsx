import React, { FC } from 'react';
import './PageContent.css'
import { PokeListProvider } from '../../pages/Pokedex/context/PokeListContext';
import PokeDex from '../../pages/Pokedex/PokeDex';


interface PageContentProps {}

const PageContent: FC<PageContentProps> = () => {
  return (
    <div className='page-content'>
      <PokeListProvider>
          <PokeDex/>
      </PokeListProvider>
    </div>
  )
}

export default PageContent;
