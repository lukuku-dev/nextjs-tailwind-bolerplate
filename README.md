# Stack

- Node js (v.16 + )
- Typescript
- React
- Nextjs
- yarn

### e2e testing

-> cypress

### styling

tailwind.css

### Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

### api call

-> SWR

### global state system

-> jotai

### clean code & code style

```
-> atomic design https://bradfrost.com/blog/post/atomic-web-design/

-> pure function https://www.geeksforgeeks.org/pure-functions-in-javascript/

-> custom hooks https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889 https://github.com/rehooks/awesome-react-hooks

-> function component > class component
```

### react structure

```
example:
pages/home.tsx
component/ --components/home/Title.tsx --components/home/Message.tsx --components/home/utils.ts --components/home/atom.ts
```

# style guide

## **Typescript**

- using **interface** rather than **type**

  ```tsx
  //good
  interface ProductCardProps {
    img: string;
    title: string;
    name: string;
    price: string;
    tags: Array<string>;
  };

  //bad
  type ProductCardProps = {
  ...
  }

  ```

- using `baseUrl` importing module( no need to dot drilling)

  ```tsx
  //good
  import { Container } from "styles/layout";

  //bad
  import { Container } from "../../../styles/layout";

  //only use relative path with the current file
  //or child of current file
  import { Container } from "./layout";
  ```

## React

- for **<the react component>**, **use regular function instead of arrow function**

  ```tsx
  //good
  export default function const Home(){
      return <p>its hoem</p>
  }

  //bad
  const Home = ()=> {
      return <p>its hoem</p>
  }

  ```

- for **<the real function(not related with react component>** **use arrow function instead of regular function**

  ```tsx
  //good
  const sumNumber = (a,b)=> {
      return a+b
  }

  //bad
  funtion sumNumber(a,b){
      return a+b
  }
  ```

- Don`t forget to use key for the iteration component
- watch out using index as a key
  [https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)

```tsx
//when map data has its own unique id
{
  todos.map((todo) => (
    <Todo {...todo} key={todo.id} />
  ));
}

//no unique id on data

import { nanoid } from 'nanoid';
...
const todosData = todos.map((todo)=> {
   return {id:nanoid(), ...todo}
})
...
{
  todosData.map((todo) => (
    <Todo {...todo} key={nanoid()} />
  ));
}

// only case when you can use index as a key
// 1. the list and items are static–they are not computed and do not change;
// 2. the items in the list have no ids;
// 3. the list is never reordered or filtered.
// When all of them are met, you may safely use the index as a key.

{
  todosData.map((todo, index) => (
    <Todo {...todo} key={index} />
  ));
}

```

- **Memo**

Use memo for child components, this will avoid child component re-rendering when the parent component state/props are updated by using this method component will only be re-rendered when it’s props are changed.

- **Component**

Always use functional components until unless you really need component lifecycle methods.

- **Functional component custom hooks**

Try to use react built-in and your custom hooks where possible, like React.useCallback , React.useEffect e.t.c, And only call hooks at the top level don’t use them inside look or conditions.

- **Story Book**
  Start Storybook by running the command npm run storybook in our terminal. This will launch a new server at http://localhost:6006, where we can view and interact with our stories.

  - Create a new file for your component's stories: Inside the .storybook directory, create a new file with the naming convention [component-name].stories.tsx. For example, if your component is named Button, the file would be named Button.stories.tsx.

  - Import the necessary dependencies: In the new story file, import any dependencies that you need for your component. This might include the component itself, as well as any other components that it relies on.

  - Define your stories: Use the storiesOf function to define your stories. You can define one or more stories for each component, using the add method to add each story. Here's an example:

  ```
  import React from "react";
  import TableRow from "../../components/common/TableRow";
  import { TableRowProps } from "../../interface/TableRow";
  import { ComponentStory, ComponentMeta } from "@storybook/react";

  export default {
  title: "TableRow",
  component: TableRow,
  } as ComponentMeta<typeof TableRow>;

  const Template: ComponentStory<typeof TableRow> = (args: TableRowProps) => {
  //👇 Your template goes here
  return <TableRow {...args} />;
  };

  export const Simple = Template.bind({});

  Simple.args = {
  text: "text",
  name: "name",
  date: "date",
  count: 10,
  };
  ```
