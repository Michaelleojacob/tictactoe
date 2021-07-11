(function(){
    "use strict";
    const flair ={
        init: function(){
            this.cacheDom();
            this.createHeader();
            this.createEmailWrapper();
            this.email();
            this.createSocialsWrapper();
            this.myGithub();
            this.myLinkedin();
            this.myRepo();
        },
        cacheDom: function(){
            this.page = document.querySelector('body');
        },
        createHeader: function(){
            const header = document.createElement("div");
            header.classList.add("header");
            this.page.prepend(header);
            this.header = header;
        },
        createEmailWrapper: function(){
            const emailwrapper = document.createElement("div");
            emailwrapper.classList.add("emailwrapper")
            this.header.append(emailwrapper);
            this.emailwrapper = emailwrapper;
        },
        email: function(){
            const myEmail = document.createElement('a'); 
            myEmail.classList.add("email");
            myEmail.target = "_blank";
            myEmail.href = "mailto:michaelleojacob@gmail.com?subject=Hello&body=I%20saw%20your%20app!"
            myEmail.title = "email";
            myEmail.innerHTML = "michaelleojacob@gmail.com";
            this.emailwrapper.append(myEmail);
            this.myEmail = myEmail;
        },
        createSocialsWrapper: function(){
            const socialwrapper = document.createElement("div");
            socialwrapper.classList.add("socials");
            this.header.append(socialwrapper);
            this.socialwrapper = socialwrapper;
        },
        myGithub: function(){
            const githubatag = document.createElement('a');
            githubatag.classList.add("githubatag");
            githubatag.target = "_blank";
            githubatag.innerHTML = `<i class="fab fa-github"></i> github`
            githubatag.title = "github";
            githubatag.href = "https://github.com/Michaelleojacob";
            this.socialwrapper.appendChild(githubatag);
        },
        myLinkedin: function(){
            const linkedinatag = document.createElement('a');
            linkedinatag.classList.add("linkedinatag");
            linkedinatag.target = '_blank';
            linkedinatag.innerHTML = `<i class="fab fa-linkedin"></i> linkedin`;
            linkedinatag.title = "linkedin"
            linkedinatag.href = "https://www.linkedin.com/in/michael-leo-jacob/";
            this.socialwrapper.appendChild(linkedinatag);
        },
        myRepo: function(){
            const repoatag = document.createElement('a');
            repoatag.classList.add('repoatag');
            repoatag.target = '_blank';
            repoatag.innerHTML = `<i class="far fa-file"></i> repo`;
            repoatag.title = "repo"
            repoatag.href = "https://github.com/Michaelleojacob/tictactoe";
            this.socialwrapper.appendChild(repoatag);
        },
        giveSpansText: function(){
        },
    }
    flair.init();
})()
