// Importando o clsx
import { clsx } from 'clsx'

// Definindo as variantes deste componente (size,)
// ?: quer dizer que é uma propriedade opcional
// Children será o texto de fato
// É necessário fazer o export para que seja possível receber dentro do storyBook como args
export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

// { size = 'md'} -> Define que o padrão a ser utilizado é o md
export function Text({ size = 'md', children}: TextProps){
    return(
        <span 
            className={clsx(
                // Definições padrões
                'text-gray-100 font-sans',
                {
                    // Aplicar o texto xs caso o text do component for definido com o sm
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}
        >
            {children}
        </span>
    )
}