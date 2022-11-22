import React from "react";
import If, {Else} from './If'


export default props => {
    const User = props.user || {}
    return (
        <div>
            <If test={User && User.name}>
                Welcome <strong>{ User.name }!</strong>
                <Else>
                    Welcome <strong>Nameless friend!</strong>
                </Else>
            </If>

        </div>

    );
}