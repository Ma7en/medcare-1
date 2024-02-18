import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBlog as deleteBlogApi } from "../../services/apiBlogs";

export function useDeleteBlog() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteBlog } = useMutation({
        mutationFn: deleteBlogApi,
        onSuccess: () => {
            toast.success("Blog successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["blogs"],
            });
        },
        onError: (error) => toast.error(error.message),
    });
    return { isDeleting, deleteBlog };
}
