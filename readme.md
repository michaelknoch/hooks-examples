# HOOKS HOOKS HOOKS

#### Goals of this Talk

-   what are react hooks?
-   why are they are so hyped?
-   how can i use them?

#### Hooks Meta Info

-   introduced in React 16.8
-   opt in, no breaking change, 100% backwards compatible
-   introduction to hooks: https://reactjs.org/docs/hooks-intro.html
-   hooks reference: https://reactjs.org/docs/hooks-reference.html

#### Why?

-   https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib

    -   "We often can’t break complex components down any further because the logic is stateful and can't be extracted to a function or another component [...] That’s what people mean when they say React doesn’t let them 'separate concerns.'"

        -   huge components
        -   duplicated logic
        -   complex patterns like render props and hocs
        -   Hooks let us organize the logic inside a component into reusable isolated units and they apply the React philosophy inside components (explicit data flow and composition)
        -   https://twitter.com/prchdk/status/1056960391543062528

    -   Hooks let you always use functions instead of having to constantly switch between functions, higher-order components render props and **classes**.
        -   no classes, no this, no binding issues

#### How to get started?

-   listen to this talk
-   learn 2 essential hooks `useState` and `useEffect`
-   even if you have a bad first reaction, I encourage you to give hooks a fair try and play with it. I think you’ll like it.

#### And then?

-   write your own custom hooks
-   community hooks
    -   apollo https://www.apollographql.com/docs/react/api/react-hooks/
    -   redux https://react-redux.js.org/next/api/hooks
