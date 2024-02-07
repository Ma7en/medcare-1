/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function getAboutUs() {
    let { data, error } = await supabase.from("aboutus").select("*");
    // let { data, error } = await supabase.from("citiess").select("*");

    if (error) {
        console.error(error);
        throw new Error(`AboutUs could not be loaded`);
        // console.log(data);
    }
    return data;
}

// export async function getCity(id) {
//     const { data, error } = await supabase
//         .from("cities")

//         .select("*")
//         .eq("id", id)
//         .single();

//     if (error) {
//         console.error(error);
//         throw new Error("City not found");
//     }

//     return data;
// }

// export async function createCity(newCity, id) {
//     const { data, error } = await supabase
//         .from("cities")
//         // .from("citiess")
//         // .insert([{ some_column: "someValue", other_column: "otherValue" }])
//         .insert([{ ...newCity }])
//         .select();

//     if (error) {
//         console.error(error);
//         throw new Error("City could not be Created");
//     }
//     return data;
// }

export async function updateAboutUs(obj, id) {
    const { data, error } = await supabase
        .from("aboutus")
        // .from("citiess")
        .update(obj)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("AboutUs could not be updated");
    }
    return data;
}

export async function deleteAboutUs(id) {
    const { data, error } = await supabase
        .from("aboutus")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("AboutUs could not be deleted");
    }

    return data;
}
