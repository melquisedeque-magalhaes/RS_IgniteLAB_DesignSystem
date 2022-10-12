// Importações para poder ler as props definidas no componente
import { Meta, StoryObj } from '@storybook/react'

// Importando o componente e as props
import { Text, TextProps } from './Text'

// Exportando a config. global do componente
export default {
    // Components será o "titulo" dentro do storybook e o /text será uma subcategoria
    title: 'Components/Text',
    component: Text,
    // ARGS são as props do componente definidas
    args: {
        // Definindo o "texto" padrão do componente
        children: 'Lorem ipsum.',
        // Definindo o fontsize 
        //size: 'lg'
    }
} as Meta <TextProps>

// as Meta <TextProps> faz ele ler as props

// É preciso exportar pelo menos uma variante
// Neste caso, será exportado um objeto vazio sem nenhuma configuração extra
export const Default: StoryObj<TextProps> = {}

// Criando variações do mesmo componente, porém, com diferentes props
export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}
