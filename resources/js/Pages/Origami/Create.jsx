import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {

    //Post: function to send the request
    const { data, setData, post, errors, reset } = useForm({
        'nombre': '',
        'descripcion': '',
        'nivel_de_dicultad': '',
        //'imagen': '',
    })

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("origami.store"));
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Crear nuevo Origami
                    </h2>

                </div>
            }
        >
            <Head title="Origami" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                onSubmit={onSubmit}
                                className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg"
                            >
                                {/* <div>
                                <InputLabel
                                    htmlFor="origami_imagen"
                                    value="Origami Imagen"
                                />
                                <TextInput
                                    id="origami_imagen"
                                    type="file"
                                    name="imagen"
                                    value={data.imagen}
                                    className="block w-full mt-1"
                                    onChange={e => setData("imagen", e.target.value)}
                                />
                                <InputError message={errors.image} className="mt-2" />
                                </div> */}
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="origami_nombre"
                                        value="Origami Nombre"
                                    />
                                    <TextInput
                                        id="origami_nombre"
                                        type="text"
                                        name="nombre"
                                        className="block w-full mt-1"
                                        isFocused={true}
                                        onChange={(e) => setData("nombre", e.target.value)}
                                    />
                                    <InputError message={errors.nombre} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="origami_descripcion"
                                        value="Origami Descripcion"
                                    />
                                    <TextAreaInput
                                        id="origami_descripcion"
                                        name="descripcion"
                                        value={data.descripcion}
                                        className="block w-full mt-1"
                                        onChange={(e) => setData("descripcion", e.target.value)}
                                    />
                                    <InputError message={errors.descripcion} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <SelectInput
                                        name="nivel_de_dicultad"
                                        id="origami_nivel_de_dicultad"
                                        className="block w-full mt-1"
                                        onChange={(e) => setData("nivel_de_dicultad", e.target.value)}
                                    >
                                        <option value="">Selecciona</option>
                                        <option value="Facil">Facil</option>
                                        <option value="Medio">Medio</option>
                                        <option value="Dificil">Dificil</option>
                                    </SelectInput>

                                    <InputError message={errors.nivel_de_dicultad} className="mt-2" />
                                </div >
                                <div className="mt-4 text-right">
                                    <Link
                                        href={route("origami.index")}
                                        className="px-3 py-1 mr-2 text-gray-800 transition-all bg-gray-100 rounded shadow hover:bg-gray-200"
                                    >
                                        Cancelar
                                    </Link>
                                    <button className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600">
                                        Guardar
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    )
}