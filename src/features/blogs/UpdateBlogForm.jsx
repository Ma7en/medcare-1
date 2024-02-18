/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { useUser } from "../authentication/useUser";
import { useUpdateBlog } from "./useUpdateBlog";

import Spinner from "../../ui/spinner/Spinner";
import Form from "../../ui/form/Form";
import FormRowVertical from "../../ui/form/FormRowVertical";
import Input from "../../ui/form/Input";
import Textarea from "../../ui/form/Textarea";
import DevSrc from "../../ui/form/DevSrc";
import Label from "../../ui/form/Label";
import FileInput from "../../ui/form/FileInput";
import Or from "../../ui/form/Or";
import FormRow from "../../ui/form/FormRow";
import Button from "../../ui/global/Button";
import AddDesLine from "../../ui/form/AddDesLine";

// import { useAboutUs } from "./useAboutUs";

function UpdateBlogForm({ blog, onCloseModal }) {
    const { user } = useUser();
    const { id: userId, email: userEmail } = user;
    const { fullName, avatar } = user.user_metadata;

    const {
        id: updateId,
        dataupdate,
        icon,
        image,
        video,
        title,
        summary,
        description,
        email,
        user_id,
    } = blog;
    const { ...editBlog } = blog;
    const { isUpdating, updateBlog } = useUpdateBlog();

    const { register, handleSubmit, reset, getValues, formState, setValue } =
        useForm({
            defaultValues: editBlog,
        });
    const { errors } = formState;

    useEffect(() => {
        const updateAboutData = async () => {
            try {
                setValue("title", title || "");
                setValue("summary", summary || "");
                // setValue("dataupdate", new Date().toISOString() || dataupdate);
                setValue("dataupdate", dataupdate);

                const descriptionData = async () => {
                    try {
                        Object.keys(description).forEach((des) => {
                            setValue(`description.${des}`, description[des]);
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                descriptionData();

                const videoData = async () => {
                    try {
                        setValue("video", {
                            // src: `${video.src}`,
                            // track: `${video.track}`,
                            url: `${video.url}`,
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                videoData();

                const imageData = async () => {
                    try {
                        setValue("image", {
                            alt: `${image.alt}`,
                            caption: `${image.caption}`,
                            url: `${image.url}`,
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                imageData();
            } catch (error) {
                console.error(error);
            }
        };
        updateAboutData();
    }, [
        dataupdate,
        description,
        image.alt,
        image.caption,
        image.url,
        setValue,
        summary,
        title,
        video.src,
        video.track,
        video.url,
    ]);

    const [desLine, setDesLine] = useState(
        Object.keys(getValues().description).length,
    );
    const [errorDesLine, setErrorDesLine] = useState("");

    function HandleAddDesLine() {
        const numberOfLines = Object.keys(getValues().description).length;
        if (getValues().description[`line${numberOfLines - 1}`]) {
            setDesLine(desLine + 1);
            const newKey = `line${numberOfLines}`;
            const newValue = "";
            description[newKey] = newValue;
        } else {
            setErrorDesLine("Please fill out these fields");
        }
    }

    function onSubmit(data) {
        console.log(`d===========`, data);

        let imageSrc =
            data.image && data.image.src ? data.image.src[0] : image.src;
        // typeof data.image === "string" ? data?.image : data?.image?.src[0];
        let ImageE = {
            ...data.image,
            src: imageSrc,
        };

        let videoSrc =
            data.video && data.video.src ? data.video.src[0] : video.src;
        let videoTrack =
            data.video && data.video.track ? data.video.track[0] : video.track;
        let videoE = {
            ...data.video,
            src: videoSrc,
            track: videoTrack,
        };

        // chat
        // تحويل الوصف إلى كائن يحتوي على السطور المختلفة
        // let description = {};
        // for (let i = 0; i < desLine; i++) {
        //     description[`line${i}`] = data[`description.line${i}`];
        // }

        updateBlog(
            {
                newBlogData: {
                    ...data,
                    image: { ...ImageE },
                    video: { ...videoE },
                    email: userEmail,
                    user_id: userId,
                    username: fullName,
                    // description: description, // تمرير الوصف المحدث هنا
                },
                id: updateId,
            },
            {
                // eslint-disable-next-line no-unused-vars
                onSuccess: (data) => {
                    reset();
                    onCloseModal?.();
                },
            },
        );
    }

    function onError(errors) {
        console.log(errors);
    }

    if (isUpdating) return <Spinner />;

    return (
        <>
            {/* <ServiceCreated dataupdate={dataupdate} /> */}

            <Form onSubmit={handleSubmit(onSubmit, onError)} type={"updata"}>
                <FormRowVertical
                    label="Blog title"
                    error={errors?.title?.message}
                >
                    <Input
                        type="text"
                        id="title"
                        disabled={isUpdating}
                        {...register("title", {
                            required: "This field is required",
                        })}
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="Blog icon"
                    error={errors?.icon?.message}
                >
                    <Input
                        type="text"
                        id="icon"
                        disabled={isUpdating}
                        {...register("icon", {
                            // required: "This field is required",
                        })}
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="summary for Blog"
                    error={errors?.summary?.message}
                >
                    <Textarea
                        id="summary"
                        defaultValue=""
                        disabled={isUpdating}
                        {...register("summary", {
                            required: "This field is required",
                        })}
                    />
                </FormRowVertical>

                <FormRowVertical
                    label="Description for Blog"
                    error={errors?.description?.message}
                >
                    <>
                        {/* {Object.keys(description).map((des) => ( */}
                        {Object.keys(description).map((des) => (
                            <Input
                                key={des}
                                type="text"
                                id={`description.${des}`}
                                disabled={isUpdating}
                                {...register(`description.${des}`, {
                                    // required: "This field is required",
                                })}
                            />
                        ))}
                        <AddDesLine
                            fn={HandleAddDesLine}
                            text="Add Input"
                            error={errorDesLine}
                        />
                    </>
                </FormRowVertical>

                <FormRowVertical
                    label="Blog video"
                    error={errors?.video?.message}
                >
                    <>
                        <DevSrc>
                            <Label type="3" htmlFor="video">
                                Choose the video
                            </Label>

                            <FileInput
                                id="video"
                                accept="video/* "
                                // type="file"
                                {...register("video.src", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <Or />

                        <DevSrc>
                            <Label type="3" htmlFor="urlvideo">
                                Type the URL
                            </Label>

                            <Input
                                type="text"
                                id="urlvideo"
                                disabled={isUpdating}
                                {...register("video.url", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <DevSrc>
                            <Label type="3" htmlFor="track">
                                Choose the Track video
                            </Label>

                            <FileInput
                                id="track"
                                // accept="text/*,.srt,.vtt"
                                accept=".txt,.srt,.vtt"
                                // type="file"
                                {...register("video.track", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>
                    </>
                </FormRowVertical>

                <FormRowVertical
                    label="Blog photo"
                    error={errors?.image?.message}
                >
                    <>
                        <DevSrc>
                            <Label type="3" htmlFor="image">
                                Choose the picture
                            </Label>

                            <FileInput
                                id="image"
                                accept="image/* "
                                {...register("image.src", {
                                    // required: image.src
                                    //     ? false
                                    //     : "This field is required",
                                })}
                            />
                        </DevSrc>
                        <Or />
                        <DevSrc>
                            <Label type="3" htmlFor="url">
                                Type the URL
                            </Label>

                            <Input
                                type="text"
                                id="url"
                                disabled={isUpdating}
                                {...register("image.url", {
                                    // required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <DevSrc>
                            <Label type="3" htmlFor="alt">
                                Enter your description picture
                            </Label>
                            <Input
                                type="text"
                                id="alt"
                                placeholder="Enter your description picture"
                                disabled={isUpdating}
                                {...register("image.alt", {
                                    required: "This field is required",
                                })}
                            />
                        </DevSrc>

                        <DevSrc>
                            <Label type="3" htmlFor="caption">
                                Enter your Caption picture
                            </Label>

                            <Input
                                type="text"
                                id="caption"
                                placeholder="Enter your Caption picture"
                                disabled={isUpdating}
                                {...register("image.caption", {
                                    required: "This field is required",
                                })}
                            />
                        </DevSrc>
                    </>
                </FormRowVertical>

                <FormRow>
                    {/* type is an HTML attribute! */}
                    {/* <Button variation="secondary" type="reset">
                    Cancel
                </Button> */}
                    <Button
                        variation="secondary"
                        type="reset"
                        onClick={() => onCloseModal?.()}
                    >
                        Cancel
                    </Button>

                    <Button disabled={isUpdating}>Update Blog</Button>
                </FormRow>
            </Form>

            {/* CreatedBy */}
        </>
    );
}

export default UpdateBlogForm;
