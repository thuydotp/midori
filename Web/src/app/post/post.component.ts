import { Component, OnInit } from '@angular/core';

import { Post } from './core/post';

@Component({
    selector: 'midori-post',
    moduleId: module.id,
    templateUrl: './post.component.html',
    styleUrls: [ './post.component.css']
})

export class PostComponent implements OnInit{
    postList: Post[] = [];
    user: string = "Nước Ép Anh Đào";
    editMode: boolean;
    selectedPost: Post = <Post> {};
    editedPost: Post = <Post> {};
    editError: string;
    ngOnInit(){
        this.getDummy();   
    }

    createPost(newPost : string){
        if(newPost && newPost.trim() != ""){
            let date = new Date(),
                postId = date.valueOf().toString();
            this.postList.push(<Post>{
                id: postId,
                author: this.user,
                content: newPost,
                createdDate: date.toISOString()
            })
        }
    }

    deletePost(post: Post){
        let index = this.postList.indexOf(post);
        if(index!== -1){
            this.postList.splice(index,1);
        }
    }

    editPost(){
        if(this.editedPost.content && this.editedPost.content.trim()){
            this.selectedPost.content = this.editedPost.content;
            this.selectedPost.editedDate = (new Date()).toISOString();
            this.resetEdit();
            this.toggleEditModal(false);
        } else{
            this.editError = "This is required field!";
        }
    }

    showEditModal(post: Post){
        this.selectedPost = post;
        this.editedPost.content = post.content;        
        this.toggleEditModal(true);
    }

    toggleEditModal(isShow: boolean){
        this.editMode = isShow;
    }

    cancelEdit(){
        this.resetEdit();
        this.toggleEditModal(false);
    }

    resetEdit(){
        this.editedPost = <Post> {};
    }
    
    private getDummy(){
        this.postList=[
            <Post> {
                id: (new Date()).valueOf().toString(),
                author: "Amanda Cerny",
                content: "If they call you crazy, that means you're on to something 😘❤",
                imageUrl: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/17352017_1335784559848055_594223169361277325_n.jpg?oh=452ca4ee111161c94a5b64f07297a309&oe=5963F8D6",
                createdDate: (new Date(2017,2,18)).toISOString(),
                editedDate: null,
                videoUrl: null
            },
            <Post> {
                id: (new Date()).valueOf().toString(),
                author: "Ashley Tisdale",
                content: "That red lip classic thing that you like. Illuminate Cosmetics",
                imageUrl: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-0/s480x480/17155416_10155048070416684_7823431147125579968_n.png?oh=83c16b0ba4e3ba42066bf5168df631b4&oe=59258DC7",
                createdDate: (new Date(2017,2,18)).toISOString(),
                editedDate: null,
                videoUrl: null
            }
        ];
    }
}
