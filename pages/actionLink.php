<style>
    html{
        background-color: #d7d7d7;
        font-family: helvetica, arial, sans-serif;
        font-size: 25px;
    }

    .demo-container{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .demo-container a{
        background-color: #35967c;
        color: white;
        padding: .35rem;
        text-decoration: none;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,.1);
    }

    .demo-container a:visited{
        text-decoration: none;
    }

    .demo-container a:hover{
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.2);
    }

    .message-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-self: center;
        background-color: white;
        height: 50%;
        margin-top: 10%;
        padding: 2%;
        max-width: 700px;
        max-height: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 20px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,.1);
        text-align: center;
    }
</style>
<div class="demo-container">
    <div class="message-box">
        <h3>Manage Actions</h3>
        <p>This is will link to the "Manage Actions" portion of the dev website in order for the user to navigate to a specific action easier.</p>
        <a style="align-self: center;" href="../pages/overview.php">Back</a>
    </div>
</div>