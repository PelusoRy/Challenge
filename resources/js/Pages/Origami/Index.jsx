import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from '@inertiajs/react';

export default function index({ origamis, queryParam = null }) {
    
    //Asegurarse que queryParam tenga un objeto
    queryParam = queryParam || {}
    //Si hay un valor entonces lo enrutas si no eliminas el query
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParam[name] = value
        } else {
            delete queryParam[name]
        }

        router.get(route('origami.index',queryParam))
    }
    
    //Si se presiono ENTER llamar la funcion searchFieldChanged con el nombre
    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;

        searchFieldChanged(name, e.target.value);
    }

    const deleteOrigami = (origami) => {
        if(!window.confirm("Confirmar")){
            return;
        }
        router.delete(route('origami.destroy', origami.id))
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Origami
                    </h2>
                    <Link href={route("origami.create")} className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600 text">
                        Añadir Nuevo
                    </Link>
                </div>
            }
        >
            <Head title="Origami" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left text-gray-400 rtl:text-right dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Imagen</th>
                                        <th className="px-3 py-2">Nombre</th>
                                        <th className="px-3 py-2">Descripcion</th>
                                        <th className="px-3 py-2">Nivel de Dificultad</th>
                                        <th className="px-3 py-2">Acciones</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2">
                                            <TextInput 
                                                className="w-full"
                                                defaultValue={queryParam.nombre}
                                                placeholder="Nombre" 
                                                onBlur={e => searchFieldChanged('nombre', e.target.value)}
                                                onKeyPress={e => onKeyPress('nombre', e)}
                                            />
                                        </th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                        <th className="px-3 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {origamis.data.map((origami) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={origami.id}>
                                            <td className="px-3 py-2">{origami.id}</td>
                                            <td className="px-3 py-2">
                                                <img src={origami.imagen} style={{width:100}} alt="" />
                                            </td>
                                            <td className="px-3 py-2 hover:underline text-nowrap">
                                                <Link href={route("origami.show", origami.id)}>
                                                    {origami.nombre}
                                                </Link>
                                            </td>
                                            <td className="px-3 py-2">{origami.descripcion}</td>
                                            <td className="px-3 py-2">{origami.nivel_de_dicultad}</td>
                                            <td className="px-3 py-2 text-nowrap">
                                                <Link href={route('origami.edit', origami.id)} className="mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Editar
                                                </Link>
                                                <button 
                                                    onClick={(e) => deleteOrigami(origami)}
                                                    className="mx-1 font-medium text-red-600 dark:text-red-500 hover:underline"
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}