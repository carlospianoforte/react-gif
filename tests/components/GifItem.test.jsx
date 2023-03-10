import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('pruebas en GifItem', () => { 
    
    test('debe hacer match con el snapshot', () => { 
       const title = 'Saitama'
       const url = 'https://one-punch.com/saitama.jpg'
        const {container} = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()

     })

     test('mostrar de mostrar la imagen con el url y el alt indicado', () => {
        const title = 'Saitama'
        const url = 'https://one-punch.com/saitama.jpg'
        render(<GifItem title={ title } url={url} />)
        //screen.debug()
        
        expect(screen.getByRole('img').src).toBe(url)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
      })

      test('debe mostrar titulo del componente', () => { 
        const title = 'Saitama'
        const url = 'https://one-punch.com/saitama.jpg'
        render(<GifItem title={ title } url={url} />)
        expect(screen.getByText(title)).toBeTruthy()

       })

 })



