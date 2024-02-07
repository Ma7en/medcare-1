/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function getCities() {
    let { data, error } = await supabase.from("blogs").select("*");
    // let { data, error } = await supabase.from("citiess").select("*");

    if (error) {
        console.error(error);
        throw new Error(`Blogs could not be loaded`);
        // console.log(data);
    }
    return data;
}

export async function getCity(id) {
    const { data, error } = await supabase
        .from("blogs")
        // .from("citiess")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Blog not found");
    }

    return data;
}

export async function createCity(newCity, id) {
    const { data, error } = await supabase
        .from("blogs")
        // .from("citiess")
        // .insert([{ some_column: "someValue", other_column: "otherValue" }])
        .insert([{ ...newCity }])
        .select();

    if (error) {
        console.error(error);
        throw new Error("Blog could not be Created");
    }
    return data;
}

export async function updateCity(obj, id) {
    const { data, error } = await supabase
        .from("blogs")
        // .from("citiess")
        .update(obj)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("Blog could not be updated");
    }
    return data;
}

export async function deleteCity(id) {
    const { data, error } = await supabase.from("blogs").delete().eq("id", id);
    // const { data, error } = await supabase
    //     .from("citiess")
    //     .delete()
    //     .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Blog could not be deleted");
    }

    return data;
}
