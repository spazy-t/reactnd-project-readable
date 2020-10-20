import styled from 'styled-components'

export const StyledCategory = styled.div`
    min-width: 300px;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    margin-top: 20px;

    h2 {
        border: 1px solid red;
        cursor: pointer;
    }

    button {
        align-self: center;
        cursor: pointer;
        margin-bottom: 15px;
    }

    section {
        border: 1px solid green;
        margin-bottom: 15px;
    }
`

export const CategoryList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostsCard = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
`

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
`

export const FormInput = styled.input`
    margin-bottom: 15px;
`

export const StyledPostDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);

    article {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-self: center;
        grid-column-start: 2;
        grid-row-start: 1;
    }
`

export const NewEntryForm = styled.form`
    grid-column-start: 2;
    display: flex;
    flex-direction: column;

    textarea {
        height: 100px;
        resize: none;
        margin-bottom: 15px;
    }
`

export const VoteWidget = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    text-align: center;
    justify-content: space-around;
    width: fit-content;
    grid-column-start: ${ props => props.columnNum };

    button {
        margin-bottom: 0;
    }
`

export const CommentContainer = styled.div`
    border: 1px solid #000;
    text-align: center;
    margin-bottom: 15px;
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
`

export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    grid-column-start: 2;
`