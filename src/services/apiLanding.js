/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";
// apiLanding
export async function getLanding() {
    let { data, error } = await supabase.from("landing").select("*");
    // let { data, error } = await supabase.from("citiess").select("*");

    if (error) {
        console.error(error);
        throw new Error(`Landing could not be loaded`);
        // console.log(data);
    }
    return data;
}

// export async function getCity(id) {
//     const { data, error } = await supabase
//         .from("cities")
//         // .from("citiess")
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

export async function updateLanding(obj, id) {
    // console.log(`obj`, obj);

    //1)=== image
    const hasImagePath = obj.image.src?.startsWith?.(supabaseUrl);
    const imageName = `${Math.random()}-${obj.image.src.name}`.replaceAll(
        "/",
        "",
    );
    const imagePath = hasImagePath
        ? obj.image.src
        : `${supabaseUrl}/storage/v1/object/public/aboutus/${imageName}`;

    // console.log(`has`, hasImagePath);
    // console.log(`name`, imageName);
    // console.log(`path`, imagePath);

    //2)=== videoSrc
    const hasVideoPath = obj.video.src?.startsWith?.(supabaseUrl);
    const videoName = `${Math.random()}-${obj.video.src.name}`.replaceAll(
        "/",
        "",
    );
    const videoPath = hasVideoPath
        ? obj.video.src
        : `${supabaseUrl}/storage/v1/object/public/aboutus/${videoName}`;

    // console.log(`has`, hasVideoPath);
    // console.log(`name`, videoName);
    // console.log(`path`, videoPath);

    //3)=== videoTrack
    const hasTrackPath = obj.video.track?.startsWith?.(supabaseUrl);
    const trackName = `${Math.random()}-${obj.video.track.name}`.replaceAll(
        "/",
        "",
    );
    const trackPath = hasTrackPath
        ? obj.video.track
        : `${supabaseUrl}/storage/v1/object/public/aboutus/${trackName}`;

    // ==================

    // 1)== create/edit cabin
    let query = supabase.from("aboutus");

    // B) EDIT
    if (id)
        query = query
            .update({
                ...obj,
                image: { ...obj.image, src: imagePath },
                video: { ...obj.video, src: videoPath, track: trackPath },
            })
            .eq("id", id);

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("AboutUs could not be Updated");
    }

    // ==================

    // 2)= upload image
    if (hasImagePath) return data;

    const { error: storageError } = await supabase.storage
        .from("aboutus")
        .upload(imageName, obj.image.src);

    // ==================

    // 2)= upload video
    if (hasVideoPath) return data;
    const { error: storageErrorVideo } = await supabase.storage
        .from("aboutus")
        .upload(videoName, obj.video.src);

    // ==================

    // 2)= upload Track
    if (hasTrackPath) return data;
    const { error: storageErrorTrack } = await supabase.storage
        .from("aboutus")
        .upload(trackName, obj.video.track);

    // ==================

    // 3) Delete the cabin if there was an error uploading image
    if (storageError) {
        await supabase.from("aboutus").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error(
            "AboutUs image could not be uploaded and the aboutus was not Updated",
        );
    }

    // ==================

    // 3) Delete the cabin if there was an error uploading image
    if (storageErrorVideo) {
        await supabase.from("aboutus").delete().eq("id", data.id);
        console.error(storageErrorVideo);
        throw new Error(
            "AboutUs video could not be uploaded and the aboutus was not Updated",
        );
    }

    // ==================

    // 3) Delete the cabin if there was an error uploading image
    if (storageErrorTrack) {
        await supabase.from("aboutus").delete().eq("id", data.id);
        console.error(storageErrorTrack);
        throw new Error(
            "AboutUs Track could not be uploaded and the aboutus was not Updated",
        );
    }

    // ==============================
    // const { data, error } = await supabase
    //     .from("landing")
    //     // .from("citiess")
    //     .update(obj)
    //     .eq("id", id)
    //     .select()
    //     .single();

    // if (error) {
    //     console.error(error);
    //     throw new Error("Landing could not be updated");
    // }
    return data;
}

export async function deleteLanding(id) {
    const { data, error } = await supabase
        .from("landing")
        .delete()
        .eq("id", id);
    // const { data, error } = await supabase
    //     .from("citiess")
    //     .delete()
    //     .eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Landing could not be deleted");
    }

    return data;
}
