import { supabase } from "./supabase";

export async function getBanner() {
  let { data, error } = await supabase.from("banner-settings").select("*");

  if (error) {
    throw new Error(error.message);
  }
  // console.log(data);
  return data;
}

export async function updateBannerDetails( formData ) {
    console.log(formData);
  const { data, error } = await supabase
    .from("banner-settings")
    .update({
      description: formData.description,
      banner_link: formData.banner_link,
      timer: formData.timer,
      is_visible: formData.is_visible,
    })
    .eq("id", "1")
    .select();

    if(error) throw new Error(error.message);
    return data;
}
