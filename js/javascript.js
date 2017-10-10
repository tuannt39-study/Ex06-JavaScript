function deleteRow(r) {
    var retVal = confirm("Bạn có chắc muốn xóa bài viết này chứ?");
    var i = r.parentNode.parentNode.rowIndex;
    if( retVal == true ){
        document.getElementById("myTable").deleteRow(i);
    return true;
    } else{
        return false;
    }
}
