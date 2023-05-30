/* eslint-disable react/prop-types */
function withPropName(name) {
    return function (WrappedComponent) {
        function ComponentWithPropName(props) {
            const newProps = {
                [name]: props.data,
            };

            return <WrappedComponent {...newProps} {...props} />;
        }
        return ComponentWithPropName;
    };
}

export default withPropName;
