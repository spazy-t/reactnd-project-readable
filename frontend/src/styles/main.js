import styled from 'styled-components'

export const StyledCategory = styled.div`
    width: 20em;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    margin-top: 20px;
    padding: 10px;
    box-shadow: 5px 6px 7px;
    background-color: #fff;

    h2 {
        cursor: pointer;
        text-align: center;
        text-transform: capitalize;
        color: #000;
    }

    button {
        align-self: center;
        cursor: pointer;
        margin-bottom: 5px;
        padding: 10px;
    }

    section {
        margin-bottom: 15px;
    }

    select {
        cursor: pointer;
    }
`

export const CategoryList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IndieCat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const VoteWidget = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    width: fit-content;
    grid-column-start: ${ props => props.columnNum };

    button {
        margin-bottom: 0;
    }
`

export const PostsCard = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr) auto;
    grid-template-rows: repeat(2, auto);
    cursor: pointer;
    border: 1px solid #000;
    margin-top: 10px;
    padding: 10px;

    ${VoteWidget} {
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 3;
        grid-column-end: 3;
        margin-left: 10px;
    }

    article {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 3;
        margin-left: 5px;
    }

    button {
        grid-row-start: 2;
        margin-bottom: 0;
        padding: 5px 10px;
    }

    h3 {
        margin-top: 0;
        font-size: 1.2em
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const FormInput = styled.input`
    margin-bottom: 15px;
`

export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    grid-column-start: 2;

    .form-input {
        margin-bottom: 10px;
    }

    textarea {
        resize: none;
        height: 5em;
    }
`

export const StyledPostDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);

    article {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: repeat(6, auto);
        text-align: center;
        align-self: center;
        grid-column-start: 2;
        grid-row-start: 1;
        background-color: #fff;
        border: 1px solid #000;
        box-shadow: 5px 6px 7px;
        margin-bottom: 15px;
        padding: 10px;

        ${VoteWidget} {
            grid-column-start: 2;
            grid-row-start: 1;
            grid-row-end: 7;
            padding: 10px 0;
        }
    }

    ${CommentForm} {
        background-color: #fff;
        border: 1px solid #000;
        padding: 10px;
        box-shadow: 5px 6px 7px;
    }
`

export const BtnHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;

    button {
        padding: 5px;
        width: 10em;
    }
`

export const NewEntryForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 15px;
    border: 1px solid #000;
    box-shadow: 5px 6px 7px;
    width: 85%;
    align-self: center;

    textarea {
        height: 100px;
        resize: none;
        margin-bottom: 15px;
    }

    button {
        padding: 5px;
    }
`

export const CommentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr) auto;
    grid-template-rows: repeat(3, auto);
    border: 1px solid #000;
    text-align: center;
    margin-bottom: 15px;
    background-color: #e0e0e0;
    box-shadow: 5px 6px 7px;
    padding: 10px;

    ${VoteWidget} {
        grid-column-start: 3;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    p:nth-child(1) {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-column-end: 3;
    }

    p:nth-child(2) {
        grid-row-start: 2;
        grid-column-start: 1;
        grid-column-end: 3;
    }

    ${CommentForm} {
        grid-column-start: 1;
        grid-column-end: 3;
        background-color: #e0e0e0;
        border: none;
        padding: 0;
        box-shadow: none;
    }
`

export const CommentList = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
`

export const AddCommentBtn = styled.button`
    grid-column-start: 2;
    width: fit-content;
    justify-self: center;
    margin-bottom: 25px;
    padding: 10px;
`