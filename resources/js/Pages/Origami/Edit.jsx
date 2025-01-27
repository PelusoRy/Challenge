import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";

export default function Show({ origami }) {

    const { data, setData, post, errors, reset } = useForm({
        'promt': '',
        'imagen': '',
    })

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("origami.generate-image", origami));
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        {`Origami "${origami.nombre}"`}
                    </h2>
                </div>
            }
        >
            <Head title={`Origami "${origami.nombre}"`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div>
                                <img
                                    src={origami.imagen}
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="grid gap-1 mt-2">
                                <div>
                                    <div>
                                        <label className="text-lg font-bold">ID Origami</label>
                                        <p className="mt-1">{origami.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">Nombre</label>
                                        <p className="mt-1">{origami.nombre}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">Descripcion</label>
                                        <p className="mt-1">{origami.descripcion}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">Dificultad</label>
                                        <p className="mt-1">{origami.nivel_de_dicultad}</p>
                                    </div>
                                    <form
                                        onSubmit={onSubmit}
                                        className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg"
                                    >
                                        <div className="mt-4">
                                            <InputLabel
                                                htmlFor="origami_promt"
                                                value="Origami promt para IA"
                                            />
                                            <TextAreaInput
                                                id="origami_promt"
                                                name="promt"
                                                value={data.promt}
                                                className="block w-full mt-1"
                                                onChange={(e) => setData("promt", e.target.value)}
                                            />
                                            <InputError message={errors.promt} className="mt-2" />
                                        </div>
                                        <div className="mt-4">
                                            <InputLabel
                                                htmlFor="origami_imagen"
                                                value="Url imagen"
                                            />
                                            <TextInput
                                                id="origami_imagen"
                                                name="imagen"
                                                value={data.imagen}
                                                className="block w-full mt-1"
                                                onChange={(e) => setData("imagen", e.target.value)}
                                            />
                                            <InputError message={errors.promt} className="mt-2" />
                                        </div>
                                        <div className="mt-4 text-right">
                                            <button className="px-3 py-1 text-white transition-all bg-orange-500 rounded shadow hover:bg-orange-600">
                                                Guardar
                                            </button>
                                        </div>
                                    </form>
                                    <div className="mt-4 text-right">
                                        <Link href={route("origami.index")} className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600 text">
                                            Regresar
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}