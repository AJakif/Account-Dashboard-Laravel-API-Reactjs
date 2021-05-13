<?php

use App\Models\BlogCategory;
use App\Models\BlogTag;

// use Auth;
class Helper{

    public static function postTagList($option='all'){
        if($option='all'){
            return BlogTag::orderBy('id','desc')->get();
        }
        return BlogTag::has('blogs')->orderBy('id','desc')->get();
    }

    public static function postCategoryList($option="all"){
        if($option='all'){
            return BlogCategory::orderBy('id','DESC')->get();
        }
        return BlogCategory::has('blogs')->orderBy('id','DESC')->get();
    }
    
}

?>