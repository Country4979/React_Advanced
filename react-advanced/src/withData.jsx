import { useEffect, useState } from "react";

function withData({ url }) {
    return function (WrappedComponent) {

    function ComponentWithData(props) {      //Nuevo componente. Cogae todas las props y dejalas pasar al componente envuelto
        const [data, setData] = useState([]);
        
        useEffect(() => {
            fetch(url)
              .then(response => response.json())
              .then(results => setData(results.data));
          }, []);

        return<WrappedComponent data={data} {...props} />
    }
    return ComponentWithData //Retorna el componente que le estoy pasando
};
}

export default withData