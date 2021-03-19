import { FormCreateLente } from '../create/FormCreateLente';
import { LentesTable } from './LentesTable';


export const CreateLenteScreen = () => {

    return (
        <>
            <div className="row px-3 py-2  ">

                <div className="col-12 col-sm-4 ">

                    <FormCreateLente />


                </div>

                <div className="col-sm-8 border">

                    <LentesTable />
                </div>

            </div>
        </>
    )
}
