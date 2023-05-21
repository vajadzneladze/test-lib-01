import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip, ThemeProvider, Text, Icon } from "../../components";



const withColorScheme = (Story: any, { globals }: any) => {

  let { scheme } = globals;

 
  return (
    <div>
      {
        scheme === 'light' && <ThemeProvider variant='light'>
          <div className="bg-for-stories-light">
            <Story />
          </div>
        </ThemeProvider>
      }

      {
        scheme === 'dark' && <ThemeProvider variant="dark">
          <div className="bg-for-stories-dark">
            <Story />
          </div>
        </ThemeProvider>
      }

      {
        scheme === 'both' &&
        <>
          <ThemeProvider variant="light">
            <div className="bg-for-stories-light">
              <Story />
            </div>
          </ThemeProvider>

          <ThemeProvider variant="dark">
            <div className="bg-for-stories-dark">
              <Story />
            </div>
          </ThemeProvider>
        </>
      }

    </div>
  )
}


export default {
  title: "UI-COMPONENTS/Tooltip",
  decorators: [withColorScheme],
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (props) => (
  <div  style = {{ display:'flex', gap: '200px', flexWrap:'wrap' , marginTop: '200px'}}> 
    
    
    <div style = {{ width:'400px', height: 'fit-content' }}>
          <Tooltip   { ...props}>
             { props.children }
          </Tooltip>

          <Text  text = 'Text For Test Props ...' id = { props.id} variant = "h1"/>,
      </div>


    <div style = {{ width:'200px', height: 'fit-content' }}>
        <Tooltip  id = "h1" position = 'top'> 
          This is Paragraph 1 
        </Tooltip>
        <Text variant="h1" id = "h1" text = "let's try h1"/>
    </div>

    <div style = {{ width:'200px', height: 'fit-content' }}>
        <Tooltip  id = "h2" position = 'left'> 
          This is Paragraph 2 
        </Tooltip>
        <Text variant="h2" id = "h2" text = "let's try h2"/>
    </div>


    <div style = {{ width:'200px', height: 'fit-content' }}>
        <Tooltip  id = "h3" position = 'bottom'> 
          This is Paragraph 3 
        </Tooltip>
        <Text variant="h3" id = "h3" text = "let's try h3"/>
    </div>

    <div style = {{ width:'200px', height: 'fit-content' }}>
        <Tooltip  id = "h4" position = 'right'> 
          This is Paragraph 4 
        </Tooltip>
        <Text variant="h4" id = "h4" text = "let's try h4"/>
    </div>

  </div>
);

export const Primary = Template.bind({});
 
Primary.args = {
  position: 'top',
  children: "let's check This ...",
  id: 'test-id'
};
